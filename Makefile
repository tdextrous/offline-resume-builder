.PHONY: frontend resume-service

frontend:
	docker-compose up -d frontend

resume-service:
	docker-compose up -d resume-service
