provider "google" {
  credentials = file("key-gcp.json")
  project     = "ethereal-yen-387811"
  region      = "southamerica-east1-a"
}

# ISSO AQUI É O QUE CRIA A MÁQUINA
resource "google_compute_instance" "app_server" {
  name         = "devops-server"
  machine_type = "e2-micro"
  zone         = "southamerica-east1-a"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }

  metadata_startup_script = "sudo apt-get update && sudo apt-get install -y docker.io"
}

# ISSO AQUI ABRE AS PORTAS
resource "google_compute_firewall" "rules" {
  name    = "allow-http-auth"
  network = "default"
  allow {
    protocol = "tcp"
    ports    = ["80", "3000"]
  }
  source_ranges = ["0.0.0.0/0"]
}

output "instancia_ip" {
  value = google_compute_instance.app_server.network_interface.0.access_config.0.nat_ip
  description = "O IP público do seu servidor em São Paulo"
}