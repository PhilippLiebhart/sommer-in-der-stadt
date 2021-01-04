const FtpDeploy = require("ftp-deploy")
const ftpDeploy = new FtpDeploy()

const parseArgs = require("minimist")
var argv = parseArgs(process.argv.slice(2), { string: "pw" })

console.log("Start with Deploy to FTP...")

var config = {
<<<<<<< HEAD
  user: "philipp-liebhart",
  password: "087666",
  host: "philipp-liebhart.de",
=======
  user: "your-user",
  password: argv.pw,
  host: "your-host",
>>>>>>> dc88c3b9400ddd32fc23efc10bc1fa9c39f6da96
  port: 21,
  localRoot: __dirname + "/public",
  remoteRoot: "yout-ftp-folder",
  include: ["*", "**/*"],
  deleteRemote: true,
  forcePasv: true,
}

ftpDeploy
  .deploy(config)
  .then(res => console.log("Deploy to FTP successfull finished!", res))
  .catch(err => console.log("Error while deploying", err))

ftpDeploy.on("uploading", data => {
  console.log(
    `...${data.transferredFileCount}/${data.totalFilesCount} files uploaded`
  )
})
