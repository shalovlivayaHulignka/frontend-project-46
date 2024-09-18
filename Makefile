install:
	npm ci

publish:
	npm publish --dry-run
	npm link

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npx jest --coverage

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test