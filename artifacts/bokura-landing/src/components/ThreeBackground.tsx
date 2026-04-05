import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function CSSFallbackBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" style={{ background: '#050508' }}>
      <div className="css-orb orb-1" />
      <div className="css-orb orb-2" />
      <div className="css-orb orb-3" />
      <div className="css-orb orb-4" />
      <div className="css-orb orb-5" />
      <div className="css-grid-lines" />
    </div>
  );
}

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let isWebGLAvailable = false;
    try {
      const canvas = document.createElement('canvas');
      isWebGLAvailable = !!(window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      isWebGLAvailable = false;
    }

    if (!isWebGLAvailable) {
      setWebGLFailed(true);
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.FogExp2(0x050508, 0.001);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setWebGLFailed(true);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const orbGeometry = new THREE.IcosahedronGeometry(1, 1);
    const cyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x00bfff,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });

    for (let i = 0; i < 50; i++) {
      const orb = new THREE.Mesh(orbGeometry, cyanMaterial);
      orb.position.x = (Math.random() - 0.5) * 100;
      orb.position.y = (Math.random() - 0.5) * 100;
      orb.position.z = (Math.random() - 0.5) * 100;
      orb.rotation.x = Math.random() * Math.PI;
      orb.rotation.y = Math.random() * Math.PI;
      const scale = Math.random() * 2 + 0.5;
      orb.scale.set(scale, scale, scale);
      group.add(orb);
    }

    const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xd4a017,
      emissiveIntensity: 0.2
    });

    const coins: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const coin = new THREE.Mesh(coinGeometry, goldMaterial);
      coin.position.x = (Math.random() - 0.5) * 80;
      coin.position.y = (Math.random() - 0.5) * 80;
      coin.position.z = (Math.random() - 0.5) * 80 - 10;
      coin.rotation.x = Math.random() * Math.PI;
      coin.rotation.y = Math.random() * Math.PI;
      const scale = Math.random() * 0.5 + 0.5;
      coin.scale.set(scale, scale, scale);
      group.add(coin);
      coins.push(coin);
    }

    const gridHelper = new THREE.GridHelper(200, 50, 0x00d4ff, 0x00d4ff);
    gridHelper.position.y = -20;
    (gridHelper.material as THREE.Material).opacity = 0.05;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00bfff, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const goldLight = new THREE.PointLight(0xd4a017, 2, 100);
    goldLight.position.set(-10, -10, 10);
    scene.add(goldLight);

    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll);

    const clock = new THREE.Clock();
    let animFrameId: number;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      group.rotation.x = time * 0.05;
      group.rotation.y = time * 0.05;

      coins.forEach((coin, i) => {
        coin.rotation.x += 0.01;
        coin.rotation.y += 0.02;
        coin.position.y += Math.sin(time + i) * 0.02;
      });

      const targetX = mouseX * 0.01;
      const targetY = mouseY * 0.01;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;

      camera.position.z = 30 - scrollY * 0.01;
      camera.rotation.x = scrollY * 0.0005;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      orbGeometry.dispose();
      cyanMaterial.dispose();
      coinGeometry.dispose();
      goldMaterial.dispose();
    };
  }, []);

  if (webGLFailed) {
    return <CSSFallbackBackground />;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: '#050508' }}
    />
  );
}
