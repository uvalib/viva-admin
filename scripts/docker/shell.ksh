if [ -z "$DOCKER_HOST" ]; then
   echo "ERROR: no DOCKER_HOST defined"
   exit 1
fi

# set the definitions
INSTANCE=viva-admin
NAMESPACE=uvadave

docker run -ti -p 8600:3000 $NAMESPACE/$INSTANCE /bin/bash -l
