const YAML = require('yamljs')
const path = require('path')

// Cargar el archivo YAML
const specs = YAML.load(path.join(__dirname, '../docs/openapi.yaml'))

module.exports = specs
