<template>
  <div id="index">
    <router-link to="/menu" class="btn-enter">

      <canvas height="620" width="1360" id="canvas"></canvas>
      <img src="../assets/images/logo.png" class="enter-img">
    </router-link>
  </div>
</template>

<script>
  let timeout = null;
  export default {
    beforeRouteLeave (to, from, next) {
      clearTimeout(timeout);
      next();
    },
    mounted() {
      if (this.$route.meta.isRedirect) {
        timeout = setTimeout(() => {
          this.$router.push('/menu')
        }, this.$route.meta.time)
      }
      console.log(document.getElementById('canvas'));
      (function () {
        var canvasEl = document.getElementById('canvas');
        var ctx = canvasEl.getContext('2d');
        var mousePos = [0, 0];

        var easingFactor = 5.0;
        var backgroundColor = '#09111E';
        var nodeColor = '#3F8381';
        var edgeColor = '#253746';

        var nodes = [];
        var edges = [];

        function constructNodes() {
          for (var i = 0; i < 100; i++) {
            var node = {
              drivenByMouse: i == 0,
              x: Math.random() * canvasEl.width,
              y: Math.random() * canvasEl.height,
              vx: Math.random() * 1 - 0.5,
              vy: Math.random() * 1 - 0.5,
              radius: Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random() * 3
            };

            nodes.push(node);
          }

          nodes.forEach(function (e) {
            nodes.forEach(function (e2) {
              if (e == e2) {
                return;
              }

              var edge = {
                from: e,
                to: e2
              }

              addEdge(edge);
            });
          });
        }

        function addEdge(edge) {
          var ignore = false;

          edges.forEach(function (e) {
            if (e.from == edge.from && e.to == edge.to) {
              ignore = true;
            }

            if (e.to == edge.from && e.from == edge.to) {
              ignore = true;
            }
          });

          if (!ignore) {
            edges.push(edge);
          }
        }

        function step() {
          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return;
            }

            e.x += e.vx;
            e.y += e.vy;

            function clamp(min, max, value) {
              if (value > max) {
                return max;
              } else if (value < min) {
                return min;
              } else {
                return value;
              }
            }

            if (e.x <= 0 || e.x >= canvasEl.width) {
              e.vx *= -1;
              e.x = clamp(0, canvasEl.width, e.x)
            }

            if (e.y <= 0 || e.y >= canvasEl.height) {
              e.vy *= -1;
              e.y = clamp(0, canvasEl.height, e.y)
            }
          });

          adjustNodeDrivenByMouse();
          render();
          window.requestAnimationFrame(step);
        }

        function adjustNodeDrivenByMouse() {
          nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor;
          nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor;
        }

        function lengthOfEdge(edge) {
          return Math.sqrt(Math.pow((edge.from.x - edge.to.x), 2) + Math.pow((edge.from.y - edge.to.y), 2));
        }

        function render() {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

          edges.forEach(function (e) {
            var l = lengthOfEdge(e);
            var threshold = canvasEl.width / 8;

            if (l > threshold) {
              return;
            }

            ctx.strokeStyle = edgeColor;
            ctx.lineWidth = (1.0 - l / threshold) * 2.5;
            ctx.globalAlpha = 1.0 - l / threshold;
            ctx.beginPath();
            ctx.moveTo(e.from.x, e.from.y);
            ctx.lineTo(e.to.x, e.to.y);
            ctx.stroke();
          });
          ctx.globalAlpha = 1.0;

          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return;
            }

            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);
            ctx.fill();
          });
        }

        window.onresize = function () {
          canvasEl.width = document.body.clientWidth;
          canvasEl.height = canvasEl.clientHeight;

          if (nodes.length == 0) {
            constructNodes();
          }

          render();
        };

        window.onmousemove = function (e) {
          mousePos[0] = e.clientX;
          mousePos[1] = e.clientY;
        }

        window.onresize(); // trigger the event manually.
        window.requestAnimationFrame(step);
      }).call(this);
    }
  }

</script>

<style lang="scss">
  #index {
    color: #fff;
    #canvas {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    
    .enter-img {
      position: fixed;
      left: 20px;
      bottom: 20px;
    }
  }
</style>
