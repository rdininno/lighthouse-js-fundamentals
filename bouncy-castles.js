// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = ((radius ** 3) * (4 / 3)) * PI;

  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (((radius ** 2) * height) * (1 / 3)) * PI;

  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let base = width * depth;
  let volume = base * height;

  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {
  let totalVolume = 0;

  for (let i = 0; i < solids.length; i++) {
    if (solids[i] === largeSphere) {
      totalVolume += sphereVolume(largeSphere.radius);
    } else if (solids[i] === smallSphere) {
      totalVolume += sphereVolume(smallSphere.radius);
    } else if (solids[i] === cone) {
      totalVolume += (cone.radius, cone.height)
    }
  }
  return totalVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
