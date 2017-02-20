// This file dynamically requires the best matching transpiled version of this
// project to avoid new major releases when a new node version is supported.
var supportedVersions = [
  6,
  4,
  0.10
]
var currentMajorVersion = parseFloat(/v?(\d+\.\d+)\./.exec(process.version)[1])

var versionToPick = supportedVersions
.filter(function (version) {
  return version <= currentMajorVersion
})
.sort()
.reverse()
.shift()

if (typeof versionToPick === 'undefined') {
  throw new Error('Node ' + process.version + ' is not supported by redux-storage-engine-jsurl')
}

require('./dist/node' + versionToPick)
