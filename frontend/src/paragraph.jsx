import React from 'react'

export default function Paragraph() {
  return (
    <div className=''>
      <p className='paragraph-content-1 selectedgreen'>
        Hey there! I'm Yash — a BTech student specializing in AI & Data Science who loves turning ideas into impactful projects.  
        I learn by building, experimenting with real-world problems, and constantly sharpening my fundamentals.  
        Python is my core language, and I enjoy working across the stack using tools like React and Flask.  
        I’m especially interested in machine learning, deep learning, and creating systems that are both efficient and cleanly designed.  
        For me, growth comes from consistency, curiosity, and shipping meaningful work.
      </p>
    </div>
  )
}

export function TerminalInfo() {
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      fontFamily: 'monospace',
      fontSize: '15px',
      padding: '25px',
      borderRadius: '10px',
      lineHeight: '1.8',
      marginTop: '0px',
      overflowX: 'auto',
      color: '#ffffff'
    }}>
      <div>
        <span style={{ color: '#ff6ac1' }}>yashlgn</span>
        <span style={{ color: '#ffffff' }}>@</span>
        <span style={{ color: '#4cffa1' }}>yash-machine</span>
        <span style={{ color: '#ffffff' }}>:~$</span>
        <span style={{ marginLeft: '5px', color: '#8be9fd' }}>neofetch</span>
      </div>

      <br />

      <div>
        <span style={{ color: '#f1fa8c' }}>Kernel:</span> <span style={{ color: '#50fa7b' }}>24.5.0</span><br />
        <span style={{ color: '#f1fa8c' }}>Uptime:</span> <span style={{ color: '#50fa7b' }}>32 days, 9 hours, 28 mins</span><br />
        <span style={{ color: '#f1fa8c' }}>Packages:</span> <span style={{ color: '#50fa7b' }}>12 (brew)</span><br />
        <span style={{ color: '#f1fa8c' }}>Shell:</span> <span style={{ color: '#50fa7b' }}>zsh 5.9</span><br />
        <span style={{ color: '#f1fa8c' }}>Resolution:</span> <span style={{ color: '#50fa7b' }}>1440x900</span><br />
        <span style={{ color: '#f1fa8c' }}>DE:</span> <span style={{ color: '#50fa7b' }}>Aqua</span><br />
        <span style={{ color: '#f1fa8c' }}>WM:</span> <span style={{ color: '#50fa7b' }}>Quartz Compositor</span><br />
        <span style={{ color: '#f1fa8c' }}>WM Theme:</span> <span style={{ color: '#50fa7b' }}>Purple (Dark)</span><br />
        <span style={{ color: '#f1fa8c' }}>Terminal Font:</span> <span style={{ color: '#50fa7b' }}>Monaco</span>
      </div>

      <br />

      <div>
        <span style={{ color: '#ff6ac1' }}>yashlgn</span>
        <span style={{ color: '#ffffff' }}>@</span>
        <span style={{ color: '#4cffa1' }}>yash-machine</span>
        <span style={{ color: '#ffffff' }}>:~$</span>
      </div>

      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
