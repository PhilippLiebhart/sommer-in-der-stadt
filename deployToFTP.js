const FtpDeploy = require("ftp-deploy")
const ftpDeploy = new FtpDeploy()

const parseArgs = require("minimist")
var argv = parseArgs(process.argv.slice(2), { string: "pw" })

console.log("Start with Deploy to FTP...")

var config = {
  user: "jam-webd3sign",
  password: argv.pw,
  host: "jam-webd3sign.de",
  port: 21,
  localRoot: __dirname + "/public",
  remoteRoot: "/www/sub/gschichtn/kulturtage/",
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
