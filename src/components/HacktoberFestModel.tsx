'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';

export default function HacktoberfestModel() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2>🎉 Hacktoberfest 2025 🎉</h2>
      <p>Welcome to the official TechBlog repository!</p>
      <p>
        Feel free to contribute to our open-source projects. Thank you for your work!
      </p>
    </Modal>
  );
}
