ARG UNICONTROL_VERSION="latest"
ARG HOME_ASSISTANT_VERSION="latest"

ARG BASE_IMAGE=homeassistant/home-assistant:${HOME_ASSISTANT_VERSION}

FROM ${BASE_IMAGE}

LABEL Description="This image content Home Assistant" Vendor="UNISEC" Version="${UNICONTROL_VERSION}" \ 
      Maintainer="UNISEC Docker Maintainers <devops@unisec.com.br>" 

# Copy template 
#COPY config/ /config/   
#VOLUME /config


EXPOSE 8123
EXPOSE 8300
EXPOSE 51827

#CMD [ "python", "-m", "homeassistant", "--config", "/config" ]