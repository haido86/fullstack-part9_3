export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

export interface CourseLinkedPart extends CoursePartBase {
    description: string;
}

export interface CourseNormalPart extends CourseLinkedPart {
    type: "normal";
}
export interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

export interface CourseSubmissionPart extends CourseLinkedPart {
    type: "submission";
    exerciseSubmissionLink: string;
}


export interface CourseRequirementPart extends CourseLinkedPart {
    type: 'special';
    requirements: (string)[]
}


export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseRequirementPart;


