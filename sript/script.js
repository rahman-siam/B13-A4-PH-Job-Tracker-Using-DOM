console.log("connected");



const allDelete = document.getElementsByClassName("delete-button");

for (const deleted of allDelete) {
    deleted.addEventListener('click', function () {
        deleted.closest('.job-1').remove();

    const remaining=document.getElementsByClassName("job-1").length;
    const totalCount=document.getElementById("total-count");
    totalCount.innerText=remaining;
    const totalJobs=document.getElementById("job-count");
    totalJobs.innerText=remaining;
       
    });
}