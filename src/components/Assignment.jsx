import React from 'react';

function Assignment() {
  return (
    <section id="assignment" className="my-8">
      <h2 className="text-2xl font-bold">Assignment</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Machine Learning</h3>
        <p>A branch of artificial intelligence that enables systems to learn and improve from experience without explicit programming.</p>

        <h3 className="text-xl font-semibold mt-4">Artificial Intelligence (AI)</h3>
        <p>The simulation of human intelligence in machines programmed to think, learn, and make decisions.</p>

        <h3 className="text-xl font-semibold mt-4">Supervised Data/Model</h3>
        <p>A machine learning method where the model is trained on labeled data to predict outcomes.</p>

        <h3 className="text-xl font-semibold mt-4">Unsupervised</h3>
        <p>A machine learning method where the model identifies patterns or structures in unlabeled data.</p>

        <h3 className="text-xl font-semibold mt-4">Deep Learning</h3>
        <p>A subset of machine learning that uses neural networks with many layers to analyze data and solve complex problems.</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Problem-Solving Task</h2>
        <h3 className="text-xl font-semibold mt-4">Debugging an API Fetch Issue</h3>
        <p>
          You are given a JavaScript function that fetches data from an API and displays it. However, it is failing to retrieve data correctly.
          Your task is to:
        </p>
        <ol className="list-decimal ml-6 mt-2">
          <li>Identify the issue causing the fetch failure.</li>
          <li>Debug and isolate the problem.</li>
          <li>Fix the error and test the function.</li>
          <li>Document the entire procedure, including how you identified the bug and how you fixed it.</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-4">Example Code:</h3>
        <pre className="bg-gray-100 p-4 rounded-md mt-2">
          <code>
            {`async function fetchData() {
              try {
                let response = await fetch('https://api.example.com/data');
                let data = await response.json();
                console.log(data);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            }
            
            fetchData(); // Expected: API data, but there might be an error`}
          </code>
        </pre>
      </div>
    </section>
  );
}

export default Assignment;
