const Content = (
    { name,
        exerciseCount,
        description,
        requirements,
        groupProjectCount,
        exerciseSubmissionLink }:
        {
            name: string,
            exerciseCount: number,
            description?: string,
            requirements?: string[],
            groupProjectCount?: number,
            exerciseSubmissionLink?: string
        }
) => {
    return (
        <>
            <div>
                <h2>{name} {exerciseCount} </h2>
                <p style={{ fontStyle: 'italic' }}>{description}</p>
                {requirements && (
                    <p>Requirements: {requirements.join(", ")}</p>
                )}
                {groupProjectCount && (
                    <p>Project exercises: {groupProjectCount}</p>
                )}
                {exerciseSubmissionLink && (
                    <p>Submission to: {exerciseSubmissionLink}</p>
                )}


            </div>
        </>
    )
}

export default Content