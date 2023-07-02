const MAX_PRIME = 10000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  return new Promise((resolve, reject) => {
    const primes = [];
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    resolve(primes);
    reject("Error in generating primes");
  });
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

const generate = document.getElementById("generate");

console.log(generate);

async function primes() {
  console.log("primes......");
  const primes = await generatePrimes(quota.value);
  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  console.log("clicked");
  primes().then((res) => {
    console.log("primes", res);
    output.textContent = `Finished generating ${quota.value} primes!`;
  });
  console.log("anshika");
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});

//async/await

//await will be used to call a function which is returning a promise
//  async