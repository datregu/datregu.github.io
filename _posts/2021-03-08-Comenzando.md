## Comenzando: Día 1
Hoy he empezado mis prácticas FCT de empresa, durante un tiempo me dedicaré a aprender varias tecnologías, comenzando con Docker. Esto es lo que he aprendido hoy:

---

**Instalar Docker**
[Cómo instalar y usar Docker en Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es)

**Estructura basica de un archivo Dockerfile**

```bash
# Usamos la imagen base de Ubuntu 20.04
FROM ubuntu:20.04

# Actualizamos el índice de paquetes e instalamos Apache
RUN apt-get update && \
    apt-get install -y apache2

# Exponemos el puerto 80 para que Apache pueda recibir solicitudes
EXPOSE 80

# Iniciamos el servicio de Apache cuando se inicie el contenedor
CMD ["apache2ctl", "-D", "FOREGROUND"]
```

**Workflow de uso de Docker**
```bash
#Con el comando build creamos una imagen a partir de un archivo Dockerfile
docker build -t nombre_imagen .
#Con el comando ps listamos los contenedores que se están ejecutando
docker ps
#Con el comando rm eliminamos un contenedor
docker rm -fv nombre_nombre
#Con el comando run creamos un contenedor a partir de una imagen
docker run -d -p 80:80 nombre_imagen
```
Si vamos a localhost:80 o simplemente localhost se mostrará la pagina de inicio del contenedor.