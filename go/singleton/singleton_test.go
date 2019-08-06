package main

import "testing"

func TestNew(t *testing.T) {
	a := New()
	b := New()
	if a != b {
		t.Errorf("Get %p, Expect %p", a, b)
	}
}
