#!/bin/bash

echo "Running auth tests..."
npx jest tests/backend/auth.test.ts --detectOpenHandles
if [ $? -ne 0 ]; then
  echo "Auth tests failed"
  exit 1
fi

echo "Running mutation tests..."
npx jest tests/backend/mutations.test.ts --detectOpenHandles
if [ $? -ne 0 ]; then
  echo "Mutation tests failed"
  exit 1
fi

echo "Running query tests..."
npx jest tests/backend/queries.test.ts --detectOpenHandles
if [ $? -ne 0 ]; then
  echo "Query tests failed"
  exit 1
fi

echo "All tests passed!"
