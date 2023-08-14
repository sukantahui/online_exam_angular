cd..
xcopy /h online_examination_deployment\*.git coder_special /S /Y
xcopy online_examination_deployment\*.bat coder_special /S /Y
cd online_exam_angular
ng build --configuration production && post_build.bat


