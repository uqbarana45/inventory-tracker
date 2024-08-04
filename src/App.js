// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc, query, limit } from 'firebase/firestore';

function App() {
  const [pantryItems, setPantryItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'pantryItems'), limit(20)));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPantryItems(items);
  };

  const addItem = async () => {
    if (newItem.trim() !== '') {
      await addDoc(collection(db, 'pantryItems'), { name: newItem });
      setNewItem('');
      fetchItems();
    }
  };

  const removeItem = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id));
    fetchItems();
  };

  const filteredItems = pantryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-container">
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pantry Tracker
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="glass-text-field"
          />
          <Button variant="contained" color="primary" onClick={addItem} className="glass-button">
            Add Item
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-text-field"
          />
        </div>
        <List>
          {filteredItems.map((item) => (
            <ListItem key={item.id} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeItem(item.id)}>
                <Delete />
              </IconButton>
            }>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default App;
