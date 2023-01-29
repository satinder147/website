# satindersh.com
UI of this website is inspired from [Victor Eke's](https://www.victoreke.com) and [Brittany Chang's](https://brittanychiang.com) work. 

I am using namecheap as my domain name provider and lets encrypt as my ssl certificate provider. 
This website is hosted on an ec2 instance.

# Deployment Steps
1. Install docker in the instance (this can be taken care of in the user data).
2. `sudo docker build -f Dockerfile . --tag website:latest`
3. `sudo docker run  -p 443:443 -p 80:80 -d --name website website:latest`
