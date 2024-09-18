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
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage --coverageProvider=v8

.PHONY: test