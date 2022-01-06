// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  console.log(Box);
  const box = await Box.deploy();
  await box.deployed();
  console.log('Box deployed to:', box.address);
  console.log('Box deployed:', box);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });