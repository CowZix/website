+++
title = "Personal Home Server"
+++

# Home Server

## [Github](https://github.com/CowZix/homelab)

## Hardware
My current server is housed in a small 10 in 4U server rack that fits snuggly under my desk. Each component is housed in a 3D printed bracket. I unfortunately do not have access to the router in my current residence so I am leaving 1U unfilled for a potential router in the future. The current configuration has a 3D printed patch panel, switch, and compute node.

<details>

<summary>Hardware Links</summary>

* Rack: [Rackmate T0](https://deskpi.com/products/deskpi-rackmate-t1-rackmount-10-inch-4u-server-cabinet-for-network-servers-audio-and-video-equipment)
* Switch: [Unifi Lite 8](https://store.ui.com/us/en/category/switching-utility/products/usw-lite-8-poe)
* Main Compute Node: [Optiplex 7050](https://www.dell.com/support/manuals/en-us/optiplex-7050-desktop/optiplex-7050-desktop-micro-owners-manual/physical-dimension-specifications?guid=guid-55fb5400-0b54-48e7-97c9-dbbf658c5bec&lang=en-us)
* Worker Node: [Minisforum UN100](https://store.minisforum.com/products/minisforum-un100p)

</details>

## Main Compute Node
I am running Proxmox on my main compute node as a general purpose hypervisor. There is a few utility LXC containers such as piHole for DNS and Tailscale to access my home network from anywhere. The Kubernetes Control Plane Node is also running in a dedicated VM.

## Worker Node
The Worker Node is running Debian natively and simply provides additional compute power to the cluster. 

## Kubernetes Services
My main goal with this iteration of my homelab is to deepen my understanding of Kubernetes while adopting GitOps practices to manage my environment. With FluxCD, I can version-control my manifests in Git, making it simple to deploy and update services. This also ensures that if something goes wrong, I can quickly redeploy the entire stack from source. For networking, I’ve set up a straightforward stack using NGINX Ingress and cert-manager, which automatically provisions TLS certificates for each service. Additionally, I have Rancher running as a frontend to view the cluster graphically.

<details>

<summary>Software Links</summary>

* Hypervisor: [Proxmox](https://www.proxmox.com/en/)
* VPN: [Tailscale](https://tailscale.com/)
* DNS: [PiHole](https://pi-hole.net/)
* Cluster: [Kubernetes](https://kubernetes.io/)
* Cluster Management[Rancher](https://www.rancher.com/)
* GitOps: [FluxCD](https://fluxcd.io/)
* Load Balancer[MetalLB](https://metallb.io/)
* Ingress: [NGINX Ingress](https://github.com/kubernetes/ingress-nginx)
* Certificates: [Cert Manager](https://cert-manager.io/)

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