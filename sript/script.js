console.log("connected");



const allDelete = document.getElementsByClassName("delete-button");

for (const deleted of allDelete) {
    deleted.addEventListener('click', function () {
        deleted.closest('.job-1').remove();

        const remaining = document.getElementsByClassName("job-1").length;
        const totalCount = document.getElementById("total-count");
        totalCount.innerText = remaining;
        const totalJobs = document.getElementById("job-count");
        totalJobs.innerText = remaining;

        if (remaining === 0) {
            document.getElementById("no-job-section").classList.remove("hidden");
        }

    });
}


const allInterview = document.getElementsByClassName("interview-button");
for (const interview of allInterview) {
    interview.addEventListener('click', function () {
        const jobCard = interview.closest('.job-1');
        const status = jobCard.querySelector('.button-not-applied');
        status.classList.add('bg-green-500!', 'text-white');
        status.classList.remove('bg-[#EEF4FF]!', 'text-black','bg-red-500!');
        status.innerText = "INTERVIEW";
         

        
        // const interviewText=Number(document.getElementById("interview-txt").innerText);
        // const update=document.getElementById("interview-txt");
        // update.innerText=interviewText+1;
        

    })
}


const allRejected = document.getElementsByClassName("rejected-button");

for (const rejected of allRejected) {
    rejected.addEventListener('click', function () {
        const jobCard = rejected.closest(".job-1");
        const status = jobCard.querySelector('.button-not-applied');
         status.classList.add('bg-red-500!', 'text-white');
        status.classList.remove('bg-[#EEF4FF]!', 'text-black','bg-green-500!');
        status.innerText = "REJECTED";
    })
}
