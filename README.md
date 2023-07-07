# WELCOME 👋🏻

## INTRODUCTION
Hi, I'm Ester Octovia Angkasa, you can call me Ester. This is my assignment in week 4 about Frontend Infra - Deployment, Networking, Domain, workflow.

In this assignment, I made a personal website and deployed it to my personal domain.

I made my personal website using HTML, CSS, and Javascript. Also, I use internal images and external icons to support my website.

## Deployment

### Deploy Link

This is the [link](https://eoang.site/) to my website after I deployed it to my domain.

### Process deployment to the personal domain

Before I deploy my website to my personal domain, I first deploy it to Netlify and change the name to [week-4-eoa.netlify.app](https://week-4-eoa03.netlify.app/).
The status of the deployment is:
[![Netlify Status](https://api.netlify.com/api/v1/badges/59f12d5e-9d19-45de-89c3-5c2bb57a9a58/deploy-status)](https://app.netlify.com/sites/week-4-eoa03/deploys)

#### Step 1

First of all, before you can deploy your website on your own domain, you must buy the domain. I bought my domain using [Niagahoster](https://www.niagahoster.co.id/).

![Niagahoster site](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/1.PNG)

Type in the domain name you want and search to see if it is available or not. If the domain is available, you can buy it.

![Domain name search](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/2.PNG)

#### Step 2

After you buy the domain, you can wait until it becomes active. While waiting, you can go to [Cloudflare](https://www.cloudflare.com/) and sign up.

After you sign up, you can register the domain name that you just bought. And you can choose what package you want to apply to your domain. I chose the free one for my domain.

![Register domain](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/3.PNG)

![Choose package domain](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/4.PNG)

#### Step 3

After that, the display will appear to setup or change nameservers. The nameservers have to change in your domain.

![Nameservers setup](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/5.PNG)

To change the nameservers in your domain, go to Niagahoster and click "Kelola Layanan" or "Manage Services". Scroll down until you find "Overview Domain" and click "Ubah Nameservers" or "Change Nameservers".

![Niagahoster Kelola Layanan](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/6.PNG)

![Niagahoster Overview Domain](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/7.PNG)

After changing the nameservers, go back to Cloudflare and click the button "Check Nameservers" at the bottom of the page. Cloudflare will check your domain and update it using email if it is already active and ready to be used.

![Domain active](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/8.PNG)

#### Step 4

After the domain is active, go to DNS and set the DNS to target your Netlify domain. You can use A, AAAA, CNAME, MX, etc. I used a CNAME to target my Netlify domain to my own domain.

![Setting DNS Records](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/9.PNG)

#### Step 5

The last step is to set your domain at your Netlify domain so your domain can connect to your Netlify.

![Set domain at Netlify](https://github.com/RevoU-FSSE-2/week-4-EOA03/blob/main/img/documentation/10.PNG)

After all the steps, you must wait a few minutes before your domain can display your website. And your website was successfully deployed.
