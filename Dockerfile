FROM ubuntu:18.04

RUN apt update -y && \
    apt upgrade -y && \
    apt-get install -y python3 python3-dev && \
    apt-get install -y python3-pip jq && pip3 install --upgrade pip && \
    apt-get install -y cron && \
    apt-get install -y supervisor && \
    apt install -y gunicorn3 && \
    apt-get install -y nginx && \
    apt install libaugeas0 -y

RUN mkdir /opt/website
RUN mkdir -p /var/log/website
COPY requirements.txt /opt/website
RUN pip install -r /opt/website/requirements.txt
RUN pip install certbot certbot-nginx

COPY . /opt/website
RUN cp /opt/website/supervisor.conf /etc/supervisor/conf.d/

RUN rm /etc/nginx/sites-enabled/default
RUN cp /opt/website/nginx.conf /etc/nginx/sites-enabled/website
RUN aws s3 cp s3://satinder-ssl-certificates/ssl_certificates.tar.gz /opt/website/
RUN tar -xzf /opt/website/ssl_certificates.tar.gz -C /etc/

WORKDIR "/opt/website/app"
CMD ["bash", "-c", "supervisord"]
