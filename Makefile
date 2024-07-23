install:
	@echo '🏗️ Installing packages'
	npm install

start:
	npm run start
build:
	@echo '📦 Export'
	npm run build

format:
	@echo '🖊️ Formatting code'
	npm run format
linter: format
	@echo '🪛 Check style'
	npm run lint
