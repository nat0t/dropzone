FROM python:3.8.6

ENV DB=mysql
ENV MYSQL_USER=dbadmin
ENV MYSQL_PASSWORD=dbpassword
ENV MYSQL_DATABASE=dropzone
ENV DJANGO_SECRET_KEY="@%1k&6#@dem29(16@t^4m77%ie0qa5+ubi-c9f3la=%_g)j#71"

RUN apt-get update && apt-get install -y mariadb-client
RUN pip3 install --upgrade pip

COPY ./ ./
RUN pip3 install -r requirements.txt

RUN chmod +x wait-for-mysql.sh

RUN pip3 install gunicorn