.PHONY: all clean frontend resume-service

all: 
	docker-compose up -d --build

frontend:
	docker-compose up -d frontend

resume-service:
	docker-compose up -d resume-service

clean:
	docker-compose down
