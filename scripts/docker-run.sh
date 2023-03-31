docker build . -t portfolio-frontend:latest
docker run --name portfolio-frontend -d -p 8080:8080 portfolio-frontend:latest