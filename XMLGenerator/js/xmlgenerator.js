function generateXML () {
    var pollerContent = "";
    var bindingName = "BIND_" + document.getElementById('project').value + "_" + document.getElementById('sender').value + "_" + document.getElementById('receiver').value + "_" + document.getElementById('docType').value + "_sFTP_FILE_POLLER";
    pollerContent += "<?xml version='1.0' encoding='UTF-8'?>\n";
    pollerContent += "<bindingdoc id='" + bindingName + "'>\n";
    pollerContent += "\t<service servicename='IB_SL_FTPReceive.services:file_Receive'/>\n";
    pollerContent += xmlParentTagFormatter("Logging", true, 1);
    pollerContent += xmlTagFormatter("logLevel", "info", 2)
    pollerContent += xmlParentTagFormatter("Logging", false, 1);
    pollerContent += xmlTagFormatter("enabled", "true", 1)
    pollerContent += "\t<binding name='" + bindingName + "' type='ftpReceive'>\n";
    
    pollerContent += xmlParentTagFormatter("connection", true, 2);
    pollerContent += xmlTagFormatter("protocol", document.getElementById('protocol').value, 3);
    pollerContent += xmlTagFormatter("hostname", document.getElementById('hostname').value, 3);
    pollerContent += xmlTagFormatter("port", document.getElementById('port').value, 3);
    pollerContent += xmlTagFormatter("user", document.getElementById('user').value, 3);
    pollerContent += xmlTagFormatter("password", document.getElementById('password').value, 3);
    pollerContent += xmlTagFormatter("connectionTimeout", document.getElementById('connectionTimeout').value, 3);
    pollerContent += xmlTagFormatter("reconnectCount", document.getElementById('reconnectCount').value, 3);
    pollerContent += xmlTagFormatter("reconnectInterval", document.getElementById('reconnectInterval').value, 3);
    pollerContent += xmlParentTagFormatter("connection", false, 2);
    
    pollerContent += xmlParentTagFormatter("file", true, 2);
    pollerContent += xmlTagFormatter("ftpDir", document.getElementById('ftpDir').value, 3);
    pollerContent += xmlTagFormatter("remoteProcDir", document.getElementById('remoteProcDir').value, 3);
    pollerContent += xmlTagFormatter("localDownloadDir", document.getElementById('localDownloadDir').value, 3);
    pollerContent += xmlTagFormatter("archiveFlagLocal", document.getElementById('archiveFlagLocal').value, 3);
    pollerContent += xmlTagFormatter("archiveLocalDir", document.getElementById('archiveLocalDir').value, 3);
    pollerContent += xmlTagFormatter("fileName", document.getElementById('fileName').value, 3);
    pollerContent += xmlTagFormatter("largeFileCheck", document.getElementById('largeFileCheck').value, 3);
    pollerContent += xmlTagFormatter("filesizeLimit", document.getElementById('filesizeLimit').value, 3);
    pollerContent += xmlParentTagFormatter("file", false, 2);

    pollerContent += xmlParentTagFormatter("transport", true, 2);
    pollerContent += xmlTagFormatter("action", document.getElementById('action').value, 3);
    pollerContent += xmlTagFormatter("remoteFileAction", document.getElementById('remoteFileAction').value, 3);
    pollerContent += xmlTagFormatter("transferMode", document.getElementById('transferMode').value, 3);
    pollerContent += xmlTagFormatter("transferType", document.getElementById('transferType').value, 3);
    pollerContent += xmlTagFormatter("reconnectCount", document.getElementById('reconnectCount').value, 3);
    pollerContent += xmlTagFormatter("reconnectInterval", document.getElementById('reconnectInterval').value, 3);
    pollerContent += xmlTagFormatter("encoding", document.getElementById('encoding').value, 3);
    pollerContent += xmlParentTagFormatter("transport", false, 2);

    pollerContent += xmlParentTagFormatter("callbacks", true, 2);
    pollerContent += xmlTagFormatter("initial", document.getElementById('initial').value, 3);
    pollerContent += xmlTagFormatter("preProcess", document.getElementById('preProcess').value, 3);
    pollerContent += xmlTagFormatter("postProcess", document.getElementById('postProcess').value, 3);
    pollerContent += xmlTagFormatter("finall", document.getElementById('finall').value, 3);
    pollerContent += xmlTagFormatter("error", document.getElementById('error').value, 3);
    pollerContent += xmlTagFormatter("largeFile", document.getElementById('largeFile').value, 3);
    pollerContent += xmlTagFormatter("postDirList", document.getElementById('postDirList').value, 3);
    pollerContent += xmlTagFormatter("postFileLoad", document.getElementById('postFileLoad').value, 3);
    pollerContent += xmlParentTagFormatter("callbacks", false, 2);

    pollerContent += xmlParentTagFormatter("pgp", true, 2);
    pollerContent += xmlTagFormatter("pgpFlag", document.getElementById('pgpFlag').value, 3);
    pollerContent += xmlTagFormatter("type", document.getElementById('type').value, 3);
    pollerContent += xmlTagFormatter("key", document.getElementById('key').value, 3);
    pollerContent += xmlTagFormatter("password", document.getElementById('pgpPassword').value, 3);
    pollerContent += xmlTagFormatter("alghorithm", document.getElementById('alghorithm').value, 3);
    pollerContent += xmlTagFormatter("secretKeyFile", document.getElementById('secretKeyFile').value, 3);
    pollerContent += xmlTagFormatter("publicKeyFile", document.getElementById('publicKeyFile').value, 3);
    pollerContent += xmlParentTagFormatter("pgp", false, 2);

    pollerContent += xmlParentTagFormatter("sFtp", true, 2);
    pollerContent += xmlTagFormatter("privateKey", document.getElementById('privateKey').value, 3);
    pollerContent += xmlTagFormatter("privateKeyPassword", document.getElementById('privateKeyPassword').value, 3);
    pollerContent += xmlTagFormatter("knownHosts", document.getElementById('knownHosts').value, 3);
    pollerContent += xmlTagFormatter("strictHostKeyChecking", document.getElementById('strictHostKeyChecking').value, 3);
    pollerContent += xmlTagFormatter("httpProxy", document.getElementById('httpProxy').value, 3);
    pollerContent += xmlTagFormatter("socksProxy", document.getElementById('socksProxy').value, 3);
    pollerContent += xmlParentTagFormatter("sFtp", false, 2);

    pollerContent += xmlTagFormatter("counter", document.getElementById('counter').value, 2);
    
    pollerContent += xmlParentTagFormatter("binding", false, 1);
    pollerContent += xmlParentTagFormatter("bindingdoc", false, 0);

    var pollerFilename = bindingName + ".xml";

    var blobPoller = new Blob([pollerContent], {
    type: "text/plain;charset=utf-8"
    });
    saveAs(blobPoller, pollerFilename);


    var schedulerContent = "";
    schedulerContent += "<?xml version='1.0' encoding='UTF-8'?>\n";
    schedulerContent += "<bindingdoc id='" + bindingName + "_Scheduler'>\n";
    schedulerContent += "\t<binding name='" + bindingName + "_Scheduler' type='scheduler'>\n";
    schedulerContent += xmlTagFormatter("cron", "*/5 * * * * *" , 2);
    schedulerContent += xmlTagFormatter("ApplicationID", document.getElementById('applicationID').value, 2);
    schedulerContent += xmlTagFormatter("BindingDoc", bindingName, 2);
    schedulerContent += xmlTagFormatter("EnabledCron", document.getElementById('enabledCron').value, 2);
    schedulerContent += xmlTagFormatter("ClusterAware", document.getElementById('clusterAware').value, 2);
    schedulerContent += xmlTagFormatter("ClusterAwareScope", document.getElementById('clusterAwareScope').value, 2);
    schedulerContent += xmlTagFormatter("priority", document.getElementById('priority').value, 2);
    schedulerContent += xmlTagFormatter("ServerRole", document.getElementById('serverRole').value, 2);
    schedulerContent += xmlTagFormatter("groupName", document.getElementById('groupName').value, 2);
    schedulerContent += xmlParentTagFormatter("binding", false, 1);
    schedulerContent += xmlParentTagFormatter("bindingdoc", false, 0);

    var schedulerFilename = bindingName + "_Scheduler.xml";

    var blobScheduler = new Blob([schedulerContent], {
    // type: "text/plain;charset=utf-8"
    type: "string"
    });
    saveAs(blobScheduler, schedulerFilename);
}

function xmlTagFormatter(tagname, tagvalue, tabnum){
    var tab = "";

    for(i=0;i<tabnum;i++) {
        tab += "\t";
    }

    if (tagvalue.length == 0) {
        return tab + "<" + tagname + "/>\n";
    } else {
        return tab + "<" + tagname + ">" + tagvalue + "</" + tagname + ">\n";
    }
}

function xmlParentTagFormatter(tagname, isOpening, tabnum) {
    var tab = "";

    for(i=0;i<tabnum;i++) {
        tab += "\t";
    }

    if(isOpening) {
        return tab + "<" + tagname + ">\n";
    } else return tab + "</" + tagname + ">\n";
}

