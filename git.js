// 定时从远端仓库拉取代码
var execSync = require('child_process').execSync
var pullAction = function () {
        var timer = setTimeout(function () {
		// 要拉取的仓库在本地的路径
		// --git-dir 要拉取的仓库中.git在本地的路径
                execSync('git --work-tree="../js/js-summary" --git-dir="../js/js-summary/.git" pull')
                pullAction()
                console.log('test++++')
        }, 3000)
}
pullAction()
