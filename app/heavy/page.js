import React, { Suspense } from 'react';
import Posts from '../components/Posts';

const heavyPage = () => {
   return (
      <div>
         <h2>This is a heavy page</h2>
         <Suspense fallback={<h3>Post Loading...</h3>}>
            <Posts/>
         </Suspense>
      </div>
   );
};

export default heavyPage;