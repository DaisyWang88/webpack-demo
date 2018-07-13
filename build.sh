#!/bin/bash
export PATH=/home/fis/npm/bin:$PATH
#project目录
PROJECT_ROOT=$PWD
#模块名称
modulename=`basename $PWD`
#模块目录
moduledir=$PROJECT_ROOT/output
#插件目录
plugindir=$moduledir/php/phplib/ext/smarty
#data目录 map.json
mapdir=$moduledir/data/smarty
#webroot
webrootdir=$moduledir/webroot

echo "[Module Name] "$modulename
#fis发布到output目录
fis3 --version --no-color
fis3 release prod -d $moduledir --no-color

if [ ! -d ${moduledir} ];then
	echo "error"
	exit -1
fi

cd $moduledir
rm -fr build.sh server-conf beforeBuild.sh package.json package-lock.json
#创建插件目录
#mkdir -p $plugindir
#mv ./plugin $plugindir
mkdir -p $mapdir
mv ./config $mapdir
mkdir -p $webrootdir
mv ./static $webrootdir
