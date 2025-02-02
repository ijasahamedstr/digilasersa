import React, { useRef } from 'react';

function Undercontration() {
  // Create a ref for each section you want to scroll to
  const sectionRef = useRef(null);

  // Handle the button click to scroll to the section
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth', // Smooth scroll
      block: 'start',     // Align to the start of the section
    });
  };

  // Inline CSS styles
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const sectionStyle = {
    padding: '100px 20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const section1Style = {
    ...sectionStyle,
    backgroundColor: '#e2e2e2',
  };

  const section2Style = {
    ...sectionStyle,
    backgroundColor: '#f9f9f9',
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={scrollToSection}
          style={buttonStyle}
        >
          Go to Section 1
        </button>
      </header>

      <section style={{ ...sectionStyle, backgroundColor: '#f1f1f1' }}>
        <h2>Welcome to the Page</h2>
        <p>This is some introductory content.</p>
      </section>

      <section ref={sectionRef} style={section1Style}>
        <h2>Section 1</h2>
        <p>This is Section 1. Scroll to this section on button click.</p>
      </section>

      <section style={section2Style}>
        <h2>Section 2</h2>
        <p>This is Section 2.</p>
      </section>
    </div>
  );
}

export default Undercontration;
