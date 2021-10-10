import initialBuilds from "./initialBuilds";


class BuildHistoryService {

    getBuildHistory() {
        return initialBuilds;
    }
}

export default new BuildHistoryService();