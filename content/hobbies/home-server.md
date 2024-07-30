+++
title = "Personal Home Server"
+++

# Home Server

## Hardware and Virtualization

I run my home server on a Dell Optiplex courtesy of eBay. My hypervisor of choice is Proxmox.

## Docker

One VM is entirely dedicated to Docker containers, which build out a majority of the my server. Portainer is used to easily manage and monitor all off my containers. Additionally I use Watchtower to automatically update containers on a daily basis.

## Networking

To access my server seamlessly from any device, I've implemented a Tailscale VPN network. Tailscale serves as a subnet router to my home network. Pi-Hole handles local DNS resolution as well as DNS filtering for a ad-free experience on my local network. Finally, I chose Traefik as a reverse proxy due to it's ease of use within the Docker environment as well as its numerous security benefits. It automatically provisions SSL certificates to each of my subdomains and keeps my network traffic running smoothly.

## Security
In addition to PiHole DNS filtering and Traefik SSL certification, I also use Wazuh as a SIEM to monitor potential threats to the network. 


<details>

<summary>Services Used</summary>

* Hypervisor - [Proxmox](https://www.proxmox.com/en/)
* VPN - [Tailscale](https://tailscale.com/)
* DNS - [PiHole](https://pi-hole.net/)
* Reverse Proxy - [Traefik](https://traefik.io/traefik/)
* Container Manager - [Portainer](https://www.portainer.io/)
* SIEM - [Wazuh](https://wazuh.com/)

</details>

