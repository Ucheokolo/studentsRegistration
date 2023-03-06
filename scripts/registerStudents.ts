import { ethers } from "hardhat";

async function main() {
    const [owner, acct1, acct2] = await ethers.getSigners();
    const StudentData = await ethers.getContractFactory("studentRegistration");
    const studentsData = await StudentData.deploy();
    await studentsData.deployed();
    console.log(`contract deployed to ${studentsData.address}`);

    console.log(`${acct1.address}`);


    console.log(`********** Interact with Contract Functions **********`);
    const studentAddr1 = acct1.address;

    const studentAddr2 = acct2.address;

    await studentsData.registerStudent(studentAddr1, "Uche", 24, "Male", "Engineering");

    console.log(await await studentsData.getStudentDetails(studentAddr1));


    await studentsData.registerStudent(studentAddr2, "Marv", 21, "Male", "Music");

    console.log(await await studentsData.getStudentDetails(studentAddr2));



}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
