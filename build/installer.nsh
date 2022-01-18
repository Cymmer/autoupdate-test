!macro customHeader
    RequestExecutionLevel admin
!macroend

!macro customInstall
  File /oname=$PLUGINSDIR\mongodb.msi "${BUILD_RESOURCES_DIR}\mongodb.msi"
  ExecWait '"msiexec" /i "$PLUGINSDIR\mongodb.msi" /passive SHOULD_INSTALL_COMPASS="0" ADDLOCAL="ServerService"'

  File /oname=$PLUGINSDIR\node.msi "${BUILD_RESOURCES_DIR}\node.msi"
  ExecWait '"msiexec" /i "$PLUGINSDIR\node.msi" /passive'
!macroend