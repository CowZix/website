+++
title = "Personal Home Server"
+++

# Home Server

## Hardware
My current server is housed in a small 10 in 4U server rack that fits snuggly under my desk. Each component is housed in a 3D printed bracket. I unfortunately do not have access to the router in my current residence so I am leaving 1U unfilled for a potential router in the future. The current configuration has a 3D printed patch panel, switch, and compute node.

<details>

<summary>Hardware Links</summary>

* Rack: [Rackmate T0](https://deskpi.com/products/deskpi-rackmate-t1-rackmount-10-inch-4u-server-cabinet-for-network-servers-audio-and-video-equipment)
* Switch: [Unifi Lite 8](https://store.ui.com/us/en/category/switching-utility/products/usw-lite-8-poe)
* Compute Node: [Minisforum UN100](https://store.minisforum.com/products/minisforum-un100p)

</details>

## Software Stack

## Hypervisor
I am running Proxmox as a bare-metal hypervisor to manage and administrate the Kubernetes Debian nodes. I am running a dedicated container for both piHole and tailscale for both accessing my server remotely and for DNS resolution and filtering.

## Kubernetes
The server currently has 3 nodes, 1 master node and 2 worker nodes. I am aware that most setups spread nodes across different machines, however I am just using my home server to learn Kubernetes. I am using MetalLB as a load balancer and reflector to manage secrets. 

## Networking
An Nginx and cert-manager stack is currently in progress. 

<details>

<summary>Sofrware Links</summary>

* Hypervisor: [Proxmox](https://www.proxmox.com/en/)
* VPN: [Tailscale](https://tailscale.com/)
* DNS: [PiHole](https://pi-hole.net/)
* Cluster: [Kubernetes](https://kubernetes.io/)
</details>

<!---
<details>

<summary>Old Configuration</summary>

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

* Hypervisor [Proxmox](https://www.proxmox.com/en/)
* VPN [Tailscale](https://tailscale.com/)
* DNS [PiHole](https://pi-hole.net/)
* Reverse Proxy [Traefik](https://traefik.io/traefik/)
* Container Manager [Portainer](https://www.portainer.io/)
* SIEM [Wazuh](https://wazuh.com/)

</details>
</details>
-->