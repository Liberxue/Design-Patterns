package main

import (
	"sync"
)

type message struct {
	msg string
}

var (
	instance *message
	// Once is an object that will perform exactly one action.
	once sync.Once
)

func New() *message {
	once.Do(func() {
		instance = &message{msg: "Hello"}
	})
	return instance
}
