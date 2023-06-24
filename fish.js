AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `fish${i}`;
  
        var posX = Math.random() * 100 + -50;
        var posY = Math.random() * 5 + 5;
        var posZ = Math.random() * 60 + -40;
        var pos = { x: posX, y: posY, z: posZ };
        this.createFish(id, pos);
      }
    },
    createFish: function (id, pos) {
      const fishModelEntity = document.querySelector("#fish");
      var fish = document.createElement("a-entity");
  
      fish.setAttribute("id", id);
      fish.setAttribute("position", pos);
      fish.setAttribute("rotation", { x: 0, y: 180, z: 0 });
  
      fish.setAttribute("scale", { x: 3, y: 3, z: 3 });
  
      fish.setAttribute("gltf-model", "fish/scene.gltf");
  
      
      fish.setAttribute("animation", {
        property: "position",
        to: "150 10 -20",
        loop: "true",
        dur: 50000
      });
  
      fish.setAttribute("animation-mixer", {});
  
      fishModelEntity.appendChild(fish);
    }
  })