import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * Global Capital Armillary Sphere - Real-Time 3D WebGL PBR Engine
 * 100% transparent canvas with multi-axial concentric rings aligning on scroll.
 */
export default function ArmillaryCanvas({ scrollProgress = 0, currentStage = 0 }) {
  const mountRef = useRef(null);
  const scrollTargetRef = useRef(scrollProgress);
  const scrollCurrentRef = useRef(scrollProgress);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Update target on scroll change
  useEffect(() => {
    scrollTargetRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 300;
    let height = container.clientHeight || width || 300;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 10.2);

    // 2. Renderer (100% Transparent Background)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.margin = '0 auto';
    renderer.domElement.style.maxWidth = '100%';
    renderer.domElement.style.maxHeight = '100%';
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup (Luxury Studio Lighting with Gold & Metallic Highlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light (Cool Studio White)
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 3.2);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // Rim Light (18k Champagne Gold)
    const goldRimLight = new THREE.DirectionalLight(0xd4af37, 4.0);
    goldRimLight.position.set(-7, -4, -6);
    scene.add(goldRimLight);

    // Top Specular Light
    const topLight = new THREE.DirectionalLight(0xffffff, 2.0);
    topLight.position.set(0, 10, 2);
    scene.add(topLight);

    // Cyan High-Tech Accent
    const cyanLight = new THREE.PointLight(0x00f0ff, 2.5, 15);
    cyanLight.position.set(0, 0, 0);
    scene.add(cyanLight);

    // 4. Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1b1c22,
      metalness: 0.88,
      roughness: 0.24,
    });

    const obsidianFacetedMat = new THREE.MeshPhysicalMaterial({
      color: 0x101216,
      metalness: 0.94,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });

    const champagneGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.22,
    });

    const lightGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf3e5a5,
      metalness: 0.86,
      roughness: 0.28,
    });

    // 5. Construct Armillary Sphere Groups (Scaled & Vertically Centered for Complete Visibility)
    const rootGroup = new THREE.Group();
    rootGroup.scale.setScalar(0.72);
    rootGroup.position.set(0, 0.15, 0);
    scene.add(rootGroup);

    // Support Base Cradle Ring
    const cradleGeo = new THREE.TorusGeometry(3.35, 0.06, 24, 90, Math.PI);
    const cradleMesh = new THREE.Mesh(cradleGeo, titaniumMat);
    cradleMesh.rotation.x = Math.PI / 2;
    cradleMesh.position.y = -0.3;
    rootGroup.add(cradleMesh);

    // Base Stand Pedestal Ring
    const standRingGeo = new THREE.TorusGeometry(2.2, 0.09, 20, 80);
    const standRing = new THREE.Mesh(standRingGeo, champagneGoldMat);
    standRing.rotation.x = Math.PI / 2;
    standRing.position.y = -2.6;
    rootGroup.add(standRing);

    // Vertical Stand Struts
    const strutGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.4, 16);
    const strutL = new THREE.Mesh(strutGeo, titaniumMat);
    strutL.position.set(-2.2, -1.4, 0);
    rootGroup.add(strutL);
    const strutR = new THREE.Mesh(strutGeo, titaniumMat);
    strutR.position.set(2.2, -1.4, 0);
    rootGroup.add(strutR);

    // --- RING 1 (Outer - Titanium Capital Meridians) ---
    const ring1Group = new THREE.Group();
    rootGroup.add(ring1Group);

    const ring1Geo = new THREE.TorusGeometry(3.05, 0.11, 32, 100);
    const ring1Mesh = new THREE.Mesh(ring1Geo, titaniumMat);
    ring1Group.add(ring1Mesh);

    // Outer Beveled Trim Ring
    const ring1TrimGeo = new THREE.TorusGeometry(3.18, 0.035, 16, 100);
    const ring1Trim = new THREE.Mesh(ring1TrimGeo, champagneGoldMat);
    ring1Group.add(ring1Trim);

    // Polar Pivot Pins
    const pinGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.35, 16);
    const pinTop = new THREE.Mesh(pinGeo, champagneGoldMat);
    pinTop.position.set(0, 3.05, 0);
    ring1Group.add(pinTop);
    const pinBottom = new THREE.Mesh(pinGeo, champagneGoldMat);
    pinBottom.position.set(0, -3.05, 0);
    ring1Group.add(pinBottom);

    // --- RING 2 (Middle - Obsidian Faceted Sovereign Enclaves) ---
    const ring2Group = new THREE.Group();
    ring1Group.add(ring2Group);

    // Faceted low-radial torus for cut-gemstone look
    const ring2Geo = new THREE.TorusGeometry(2.55, 0.13, 10, 80);
    const ring2Mesh = new THREE.Mesh(ring2Geo, obsidianFacetedMat);
    ring2Group.add(ring2Mesh);

    const ring2TrimGeo = new THREE.TorusGeometry(2.68, 0.03, 16, 80);
    const ring2Trim = new THREE.Mesh(ring2TrimGeo, lightGoldMat);
    ring2Group.add(ring2Trim);

    // --- RING 3 (Inner - 18k Champagne Gold Global Liquidity Axis) ---
    const ring3Group = new THREE.Group();
    ring2Group.add(ring3Group);

    const ring3Geo = new THREE.TorusGeometry(2.05, 0.09, 32, 90);
    const ring3Mesh = new THREE.Mesh(ring3Geo, champagneGoldMat);
    ring3Group.add(ring3Mesh);

    // Inner Graduated Coordinate Ring
    const ring4Geo = new THREE.TorusGeometry(1.68, 0.045, 20, 80);
    const ring4Mesh = new THREE.Mesh(ring4Geo, lightGoldMat);
    ring3Group.add(ring4Mesh);

    // --- CENTRAL CORE (Celestial Globe with Global Financial Hubs) ---
    const globeGroup = new THREE.Group();
    ring3Group.add(globeGroup);

    // Dark Smoked Globe Sphere
    const globeSphereGeo = new THREE.SphereGeometry(1.05, 36, 36);
    const globeSphereMat = new THREE.MeshStandardMaterial({
      color: 0x0c0e14,
      roughness: 0.35,
      metalness: 0.75,
    });
    const globeSphere = new THREE.Mesh(globeSphereGeo, globeSphereMat);
    globeGroup.add(globeSphere);

    // Gold Latitude / Longitude Wireframe Grid
    const wireframeGeo = new THREE.SphereGeometry(1.06, 24, 16);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // Global Financial Advisory Hub Nodes (London, Zurich, NYC, Singapore, Dubai, Tokyo)
    const hubs = [
      { name: 'London', lat: 51.5, lon: -0.1 },
      { name: 'Zurich', lat: 47.37, lon: 8.54 },
      { name: 'New York', lat: 40.71, lon: -74.0 },
      { name: 'Singapore', lat: 1.35, lon: 103.82 },
      { name: 'Dubai', lat: 25.2, lon: 55.27 },
      { name: 'Tokyo', lat: 35.67, lon: 139.65 },
    ];

    const hubGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.5,
    });

    const r = 1.07;
    hubs.forEach((hub) => {
      const phi = (90 - hub.lat) * (Math.PI / 180);
      const theta = (hub.lon + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);

      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.position.set(x, y, z);
      globeGroup.add(hubMesh);
    });

    // Central Core Pulse Light Inside Globe
    const coreLight = new THREE.PointLight(0xd4af37, 3, 4);
    globeGroup.add(coreLight);

    // 6. Mouse Parallax Handlers
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 300;
      height = container.clientHeight || width || 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Render Loop (Scroll Alignment + Idle Drift + Mouse Parallax)
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth scroll lerping for heavy precision mechanical feel
      scrollCurrentRef.current += (scrollTargetRef.current - scrollCurrentRef.current) * 0.085;
      const sp = scrollCurrentRef.current;

      // Mouse parallax lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // Root Parallax Tilt (Clamped so all components stay 100% within canvas boundaries)
      const clampedY = Math.max(-0.6, Math.min(0.6, mouseRef.current.y));
      const clampedX = Math.max(-0.6, Math.min(0.6, mouseRef.current.x));
      rootGroup.rotation.x = THREE.MathUtils.lerp(rootGroup.rotation.x, clampedY * 0.18 + 0.08, 0.08);
      rootGroup.rotation.y = THREE.MathUtils.lerp(rootGroup.rotation.y, clampedX * 0.22, 0.08);

      // --- MULTI-AXIAL CONCENTRIC RING ROTATION ON SCROLL ---
      // Full 360-degree rotation across the 3 stages with mechanical alignment checkpoints

      // Outer Titanium Ring (Primary Meridian Axis)
      ring1Group.rotation.y = sp * Math.PI * 2 + Math.sin(elapsed * 0.6) * 0.04;
      ring1Group.rotation.z = Math.sin(sp * Math.PI * 2) * 0.15;

      // Middle Obsidian Ring (Inclined Gimbal - pivots to align with Stage 2)
      const ring2TargetX = 0.45 + Math.sin(sp * Math.PI * 2) * 0.6;
      const ring2TargetY = sp * Math.PI * 2.8 + Math.cos(elapsed * 0.8) * 0.05;
      ring2Group.rotation.x = ring2TargetX;
      ring2Group.rotation.y = ring2TargetY;

      // Inner Champagne Gold Ring (High-Velocity Financial Liquidity Axis)
      ring3Group.rotation.x = Math.cos(sp * Math.PI * 2) * 0.5;
      ring3Group.rotation.z = sp * Math.PI * 3.2 + Math.sin(elapsed * 1.0) * 0.06;
      ring3Group.rotation.y = sp * Math.PI * 1.5;

      // Central Financial Core Globe (Continuous Planetary Spin)
      globeGroup.rotation.y = sp * Math.PI * 4 + elapsed * 0.35;

      // Dynamic Core Pulse
      coreLight.intensity = 2.5 + Math.sin(elapsed * 3.0) * 0.8;
      cyanLight.intensity = 2.0 + Math.cos(elapsed * 2.5) * 0.7;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full flex items-center justify-center pointer-events-auto mx-auto"
      aria-label="3D Global Capital Armillary Sphere rotating across concentric financial meridians"
    />
  );
}
