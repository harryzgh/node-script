//  定时从远端仓库拉取代码
const execSync = require('child_process').execSync
const path = require('path')
const pullAction = function () {
        const timer = setTimeout(function () {
                // bb分支上的提交
                // zgh分支的提交1
                // ceshiyixiakdk
		// 要拉取的仓库在本地的路径
		// --git-dir 要拉取的仓库中.git在本地的路径
                execSync('git --work-tree="../js/js-summary" --git-dir="../js/js-summary/.git" pull')
                pullAction()
                console.log('test++++00', process.cwd())
		console.log('test++++11', __dirname)
                console.log('9290+++++', path.resolve(__dirname, "../public/index.html"))
        }, 3000)
}
pullAction()
