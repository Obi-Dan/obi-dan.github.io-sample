deploy:
	@npm i
	@npm run predeploy
	@npm run deploy
.PHONY: deploy

run:
	@npm i
	@npm run predeploy
	@serve -s build
.PHONY: run

test-a:
	dig danielhofferbert.com +noall +answer -t A
	dig danielhofferbert.com +noall +answer -t AAAA
	dig sample.danielhofferbert.com +noall +answer -t CNAME
.PHONY: test-a