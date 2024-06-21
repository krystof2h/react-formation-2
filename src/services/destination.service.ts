import { Destination } from "../models/destination.model";

export function getDestinations(): Promise<Destination[]> {
    const baseUrl = 'https://travel-api.clicksomeone.com';

    return fetch(`${baseUrl}/destinations`).then(response => response.json())
}