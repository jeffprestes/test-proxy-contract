// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  const boxUpgraded = await upgrades.upgradeProxy('0x1A777A41E27f4E900b2aCa4062F71BA7a29545C8', BoxV2);
  console.log('Box upgraded', boxUpgraded);
}

main();